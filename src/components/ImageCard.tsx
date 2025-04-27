import { Photo } from '@/models/Images';
import { motion } from 'framer-motion';
//import Image from 'next/image';
import LazyImage from './LazyImage';

type ImageCardProps = {
    photo: Photo;
}

export default function ImageCard({photo}: ImageCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-8 overflow-hidden rounded-xl bg-amber-100 shadow-md"
        >
            <LazyImage
                src={photo.src.large}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className='w-full object-cover'
                style={{height: `${photo.height / 24}px`}}
            />
        </motion.div>  
    )
}

