import * as React from 'react';
import { HomeModernIcon, UserCircleIcon, BookOpenIcon, ClipboardDocumentCheckIcon, PaperClipIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

function Nav() {

    return (
        <>
            <header id="header" class="flex flex-col justify-center fixed inset-y-0 left-0 z-[999] transition  duration-500 p-[15px] overflow-y-auto">   {/* try transition-all */}
                <nav class="nav-menu">
                    <ul>
                        <li class="active"> <HomeModernIcon className="w-6 h-6" />Home</li>
                        <li><a href="#about"><i><UserCircleIcon className="w-6 h-6" /></i><span>About</span></a></li>
                        <li><a href="#resume"><i><BookOpenIcon className="w-6 h-6" /></i><span>Resume</span></a></li>
                        <li><a href="#portfolio"><i><ClipboardDocumentCheckIcon className="w-6 h-6" /></i><span>Portfolio</span></a></li>
                        <li><a href="#services"><i><PaperClipIcon className="w-6 h-6" /></i><span>Services</span></a></li>
                        <li><a href="#contact"><i><EnvelopeIcon className="w-6 h-6" /></i><span>Contact</span></a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Nav
