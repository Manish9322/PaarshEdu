'use client';
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function AutoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sessionVisit = sessionStorage.getItem('hasVisited');
    if (!sessionVisit) {
      setTimeout(() => setOpen(true), 500); // Delay for smooth appearance
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={(isOpen) => isOpen && setOpen(true)}>
      <DialogContent className="max-w-lg p-6 rounded-lg shadow-lg bg-white border border-gray-300" onClick={(e) => e.stopPropagation()}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-center text-gray-800">Welcome to Our Website</DialogTitle>
          </DialogHeader>
          <p className="text-gray-700 text-center mb-4">Hello Guys,</p>
          <p className="text-gray-600 text-sm text-center">Paarsh Infotech Pvt Ltd provides Industrial Training & Internship.</p>
          <p className="text-gray-600 text-sm mt-2"><strong>We Provide Full-stack development Training and internship.</strong></p>
          <p className="text-gray-600 text-sm mt-2"><strong>Front End:</strong> HTML, CSS, Bootstrap, Javascript, AJAX, Jquery.</p>
          <p className="text-gray-600 text-sm"><strong>Back End:</strong> Basics Php, Core Php, Advance Php, Basic Java, Core Java, Advance Java, Basic Python, Advance Python.</p>
          <p className="text-gray-600 text-sm mt-3 font-semibold">What we provide:</p>
          <ul className="list-disc pl-5 text-gray-600 text-sm">
            <li>Trainer</li>
            <li>Live project for practice</li>
            <li>Internship Certificate</li>
            <li>Work experience certificate</li>
            <li>Stipend (minimum 8k per month)</li>
            <li>Job</li>
          </ul>
          <p className="text-gray-600 text-sm mt-3"><strong>Duration:</strong> 2 months, 4 months, or 6 months</p>
          <p className="text-gray-600 text-sm"><strong>Timing:</strong> 10 am to 6 pm (depends on the batch)</p>
          <p className="text-red-600 font-semibold text-sm mt-3">Industrial Training and Internship is now only for 2499/-</p>
          <p className="text-gray-700 text-sm mt-2"><strong>For more details, contact us at 9860988343 / 9075201035</strong></p>
          <p className="text-gray-700 text-center mt-4">We look forward to helping you grow your skills!</p>
          <div className="flex justify-center mt-4">
            <Button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" onClick={() => setOpen(false)}>Close</Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
