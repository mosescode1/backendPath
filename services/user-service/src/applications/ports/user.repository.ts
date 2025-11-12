import { User } from "../../domain/user.entity";
import { CreateUserDto } from "../dtos/create-user.dto";

export interface UserRepository {
  createUser(data: CreateUserDto): Promise<User>;
  findUserByEmail(email: String): Promise<any>;
}
