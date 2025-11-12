import { CreateUserDto } from "../dtos/create-user.dto";
import { UserRepository } from "../ports/user.repository";

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async CreateUser(input: CreateUserDto): Promise<any> {
    const existingUser = await this.userRepository.findUserByEmail(input.email);
    // TODO: fix to work
    return existingUser;
  }
}
