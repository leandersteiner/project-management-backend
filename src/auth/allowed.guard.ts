import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';

@Injectable()
export class AllowedGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { user, params } = context.switchToHttp().getRequest();
    if (!user) throw new UnauthorizedException();
    if (!params.userId && !params.ownerId) return true;
    return params.userId === user.id || params.ownerId === user.id;
  }
}
