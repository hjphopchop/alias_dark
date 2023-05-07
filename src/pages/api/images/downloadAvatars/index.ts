import prisma from '@/prisma/connection';

import * as fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path, { resolve } from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

const dowloadImages = async (req: NextApiRequest, res: NextApiResponse) => {
  const imageData = await prisma.image.findMany({
    where: {
      type: 'USER_AVATAR',
    },
    select: {
      url: true,
    },
  });
  if (imageData) {
    try {
      const imagesDir = resolve('./');
      const images = [];
      for (let i = 0; i < imageData.length; i++) {
        const src = fs.readFileSync(path.join(imagesDir, imageData[i]?.url), {
          encoding: 'base64',
        });
        images.push({ file: src });
      }

      res.status(200).json(images);
    } catch (err) {
      console.log(imageData);
      console.log(err);

      res.status(500).json(false);
    }
  } else {
    res.status(404).json(false);
  }

  return res;
};

export default dowloadImages;
