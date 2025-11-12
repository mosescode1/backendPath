import { Context } from "hono";
import { UserUseCase } from "../../../applications/use-cases/user-usecase";
import { CreateUserDto } from "../../../applications/dtos/create-user.dto";

export class AuthController {
  constructor(private readonly userUseCase: UserUseCase) {}

  async registerUser(c: Context) {
    // const data = await c.req.json<CreateUserDto>();
    // const user = await this.userUseCase.CreateUser(data);
    // return c.json(user, 201);
    return c.json({
      status: "working",
    });
  }

  async loginUser(c: Context) {}
}
