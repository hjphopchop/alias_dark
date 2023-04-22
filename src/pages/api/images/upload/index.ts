import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import multer from 'multer';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

import prisma from '@/prisma/connection';

interface NextConnectApiRequest extends NextApiRequest {
  files: Express.Multer.File[];
}
type ResponseData = any;

const oneMegabyteInBytes = 1000000;
const outputFolderName = './public/uploads';

const upload = multer({
  limits: { fileSize: oneMegabyteInBytes * 10 },
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
      const ext = file.originalname?.split('.').reverse()[0];
      const newFileName = uuidv4() + '.' + ext;

      return cb(null, newFileName);
    },
  }),
});

const apiRoute = nextConnect({
  onError(
    error,
    req: NextConnectApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    res.status(501).json({ error: `Ошибка ${error.message}` });
  },
  onNoMatch(req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) {
    res.status(405).json({ error: `Метод '${req.method}' не разрешен` });
  },
});

apiRoute
  .use(upload.array('theFiles'))
  .use(async (req: NextConnectApiRequest, res: NextApiResponse) => {
    const id = await prisma.image.create({
      data: {
        type: 'CATEGORY_COVER',
        url: req.files[0].destination + '/' + req.files[0].filename,
      },
      select: {
        id: true,
      },
    });
    res.status(200).json({ data: id });
  });

apiRoute.post(
  (req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) => {
    const filenames = fs.readdirSync(outputFolderName);
    const images = filenames.map((name) => name);

    res.status(200).json({ data: images });
  }
);

export const config = {
  api: {
    bodyParser: false,
  },
};
export default apiRoute;
