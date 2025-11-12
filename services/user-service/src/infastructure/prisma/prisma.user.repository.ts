import { CreateUserDto } from "../../applications/dtos/create-user.dto";
import { UserRepository } from "../../applications/ports/user.repository";
import { User } from "../../domain/user.entity";

export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaCLient) {}

  async createUser(data: CreateUserDto): Promise<User> {
    const User = await this.prisma.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
    });

    return User;
  }

  async findUserByEmail(email: String): Promise<any> {}
}
