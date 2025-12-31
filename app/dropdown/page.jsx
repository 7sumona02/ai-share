'use client'
import { Archive, ChartColumnDecreasing, CopyPlus, Ellipsis, PenLine, Settings, SplinePointer, Users } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

const page = () => {
    const [dialog, setDialog] = useState(true)

    const showDialog = () => setDialog(!dialog)

    return (
        <div className='min-h-screen w-screen bg-neutral-100 relative'>
            <div className='absolute top-4 left-4'>
                <motion.div onClick={showDialog} whileTap={{ scale: 0.9 }} className='w-fit h-fit bg-white p-3 rounded-md border border-neutral-200 cursor-pointer'><Ellipsis className='size-4' /></motion.div>

                <AnimatePresence mode='popLayout'>
                    {dialog && (
                        <motion.div
                            initial={{ opacity: 0.8, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.15 }}
                            style={{ originX: 0, originY: 0 }}
                            className='bg-white px-2 py-2 border rounded-2xl border-neutral-200 mt-2 w-60 h-fit select-none'
                        >
                            <div className='border-b-neutral-200 border-b pb-2'>
                                <div className='text-sm text-neutral-600 font-medium flex items-center gap-2 py-2 hover:bg-neutral-100 rounded-lg hover:text-black transition-all ease-out px-2 cursor-pointer '>
                                    <Users className='size-4' /> Contacts
                                </div>
                                <div className='text-sm text-neutral-600 font-medium flex items-center gap-2 py-2 hover:bg-neutral-100 rounded-lg hover:text-black transition-all ease-out px-2 cursor-pointer '>
                                    <ChartColumnDecreasing className='size-4' /> Statistics
                                </div>
                                <div className='text-sm text-neutral-600 font-medium flex items-center gap-2 py-2 hover:bg-neutral-100 rounded-lg hover:text-black transition-all ease-out px-2 cursor-pointer '>
                                    <SplinePointer className='size-4' /> Integrations
                                </div>
                                <div className='text-sm text-neutral-600 font-medium flex items-center gap-2 py-2 hover:bg-neutral-100 rounded-lg hover:text-black transition-all ease-out px-2 cursor-pointer '>
                                    <Settings className='size-4' /> Settings
                                </div>
                            </div>
                            <div className='border-b-neutral-200 border-b py-2'>
                                <div className='text-sm text-neutral-600 font-medium flex items-center gap-2 py-2 hover:bg-neutral-100 rounded-lg hover:text-black transition-all ease-out px-2 cursor-pointer '>
                                    <PenLine className='size-4' /> Rename
                                </div>
                                <div className='text-sm text-neutral-600 font-medium flex items-center gap-2 py-2 hover:bg-neutral-100 rounded-lg hover:text-black transition-all ease-out px-2 cursor-pointer '>
                                    <CopyPlus className='size-4' /> Duplicate
                                </div>
                            </div>
                            <div className='pt-2'>
                                <div className='text-sm text-neutral-600 font-medium flex items-center gap-2 py-2 hover:bg-neutral-100 rounded-lg hover:text-black transition-all ease-out px-2 cursor-pointer '>
                                    <Archive className='size-4' /> Archive
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default page