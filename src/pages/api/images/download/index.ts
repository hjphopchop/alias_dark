import prisma from '@/prisma/connection';

import * as fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path, { resolve } from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

const dowloadImage = async (req: NextApiRequest, res: NextApiResponse) => {
  const imageId = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;

  if (imageId) {
    const imagePath = await prisma.image.findUnique({
      where: {
        id: imageId,
      },
      select: {
        url: true,
      },
    });
    if (imagePath) {
      try {
        const imagesDir = resolve('./');

        const src = fs.readFileSync(path.join(imagesDir, imagePath?.url), {
          encoding: 'base64',
        });

        res.status(200).json({ file: src });
      } catch (err) {
        console.log(err);

        res.status(500).json(false);
      }
    } else {
      res.status(404).json(false);
    }
  } else res.status(404).json(false);

  return res;
};

export default dowloadImage;
