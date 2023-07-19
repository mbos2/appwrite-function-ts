import sdk from 'node-appwrite';
import {EnumTest} from './types/enums';

module.exports = async function (req: any, res: any) {
  res.json({
    message: EnumTest.HELLO_WORLD,
  });
};
