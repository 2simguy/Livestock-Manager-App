import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

const OTP_EXPIRY_MINUTES = 10;

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(data: { name: string; email: string; password: string }) {
    const hash = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: { name: data.name, email: data.email, password: hash },
    });
    return { id: user.id, email: user.email, name: user.name };
  }

  async validateUser(email: string, pass: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) return null;
    const valid = await bcrypt.compare(pass, user.password);
    return valid ? user : null;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    if (!user) throw new UnauthorizedException();
    const token = await this.jwtService.signAsync({ sub: user.id });
    return { access_token: token };
  }

  async forgotPassword(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) return;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await this.prisma.user.update({
      where: { id: user.id },
      data: { otp, otpTimestamp: new Date() },
    });
    // send OTP - placeholder
  }

  async resetOtp(email: string, otp: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (
      !user ||
      !user.otp ||
      user.otp !== otp ||
      !user.otpTimestamp ||
      new Date().getTime() - user.otpTimestamp.getTime() > OTP_EXPIRY_MINUTES * 60000
    ) {
      throw new UnauthorizedException('Invalid OTP');
    }
    const hash = await bcrypt.hash(password, 10);
    await this.prisma.user.update({
      where: { id: user.id },
      data: { password: hash, otp: null, otpTimestamp: null },
    });
  }
}
