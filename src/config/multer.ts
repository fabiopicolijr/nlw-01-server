import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');

export default {
  storage: multer.diskStorage({
    destination: uploadFolder,
    filename(request, file, callback) {
      const hash = crypto.randomBytes(6).toString('hex');
      const fileName = `${hash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
