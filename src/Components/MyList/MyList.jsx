import React, { useRef, useState, useEffect } from 'react'
import Card from '../Card/Card'

function MyList({ posts }) {
    const listRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (listRef.current) {
                setIsScrolled(listRef.current.scrollTop > 0);
            }
        };

        listRef.current?.addEventListener('scroll', checkScroll);
        return () => listRef.current?.removeEventListener('scroll', checkScroll);
    }, []);

    return (
        <div className="relative">
           
            <div 
                ref={listRef} 
                className={`flex flex-col gap-4 px-6 bg-gray-300 overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 p-4 transition-all`}
            >
                {posts.map(item => (
                    <Card key={item._id} item={item} />
                ))}
            </div>

          
            {isScrolled && (
                <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-gray-300 to-transparent" />
            )}
        </div>
    )
}

export default MyList