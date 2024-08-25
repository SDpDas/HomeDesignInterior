import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Nav from './nav'
import Logo from './logo'
import { AlignJustify } from 'lucide-react'

const MobileNavigation = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify
                className='cursor-pointer'
                >
                </AlignJustify>
            </SheetTrigger>
            <SheetContent>
                <div className='flex flex-col items-center justify-between h-full py-8'>
                    <div className='flex flex-col items-centr gap-y-32'>
                        <logo />
                        <Nav 
                        containerStyles={'flex flex-col items-center gap-y-8'}
                        linkStyles={'text-1xl font-semibold'}
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavigation