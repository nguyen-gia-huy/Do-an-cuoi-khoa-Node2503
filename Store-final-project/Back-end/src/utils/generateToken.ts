import jwt from 'jsonwebtoken';
import config from '../config/config';
import { IUser } from '../modules/user/models/user.model';

const generateToken = (user: IUser) => {
	return jwt.sign({ userId: user._id,userame: user.username, role: user.role }, config.JWT_SECRET, {
		expiresIn: '1h',
	});
};

export default generateToken;
