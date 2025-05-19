import React from 'react'
import StorageTips from '../assets/StorageTips.png'
import StorageLocation from '../assets/StorageLocation.png'
import WatchAndLearn from '../assets/WatchAndLearn.png'
import AskAnExpert from '../assets/AskAnExpert.png'

function QuickLinks() {
  return (
    <div class="h-[340px] flex justify-between px-40 items-center">
        <button class='w-[232px] h-[272px]'><img src={StorageTips} alt='StorageTips'/></button>
        <button class='w-[232px] h-[272px]'><img src={StorageLocation} alt='StorageLocation'/></button>
        <button class='w-[232px] h-[272px]'><img src={WatchAndLearn} alt='Watch and learn'/></button>
        <button class='w-[232px] h-[272px]'><img src={AskAnExpert} alt="Ask An Expert"/></button>
    </div>
  )
}

export default QuickLinks