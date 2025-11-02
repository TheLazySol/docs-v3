import Hero from '@/app/(home)/_components/hero';
import GradualBlur from '@/components/GradualBlur';
import Separator from '@/components/separator';
import { getSortedByDatePosts } from '@/lib/source';
import * as motion from 'motion/react-client';
import CTA from './_components/cta';
import { Customers } from './_components/customers';
import { FAQ } from './_components/faq';
import Features from './_components/features';
import Testimonials from './_components/testimonials';

export default function Home() {
  const posts = getSortedByDatePosts().slice(0, 3);

  return (
    <div style={{ position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='relative'
      >
        <Hero posts={posts} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Customers count={50} />
        </motion.div>
        <Separator />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Features />
        </motion.div>
        <Separator />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Testimonials />
        </motion.div>
        <Separator />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <FAQ />
        </motion.div>
        <Separator />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <CTA />
        </motion.div>
      </motion.div>
      <GradualBlur
        target="page"
        position="bottom"
        height="10rem"
        strength={2.5}
        divCount={4}
        curve="bezier"
        exponential={true}
        opacity={0.8}
      />
    </div>
  );
}
