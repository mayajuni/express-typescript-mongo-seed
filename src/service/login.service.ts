import Login from '../mongo/login.mongo';
import { ErrorModule } from '../module/error.module';
import { Crypto } from '../module/crypto.module';

export namespace LoginService {
    export const login = async (userId: string, password: string) => {
        const passwordKey = process.env.PASSWORD_KEY || 'testKey';

        const user: any = await Login.findOne({_id: userId, password: Crypto.encrypt(password, passwordKey)}, {password: 0});

        if(!user) {
            ErrorModule.errThrow(400, 'check_id_pw');
        }

        return user._doc;
    };
}