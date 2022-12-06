import React, { useState } from 'react'

// 'hover:border-gray-900 hover:border-3 hover:bg-gray-300 duration-200 transition-all w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-defaultChecked:font-semibold peer-defaultChecked:bg-slate-900 peer-defaultChecked:text-white'

export default function Survey() {
        const [dataUpdated, setDataUpdated] = useState(false)

        function UpdatedData() {
            if (dataUpdated) {
                return <div>
                    <div class="fixed z-10 bottom-1 right-1 md:right-5 md:bottom-5 left-1 md:left-5 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                        <div class="flex">
                            <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                            <div>
                            <p class="font-bold text-left">Thank you</p>
                            <p class="text-sm text-left">Thank you for adding to our data. All data added is anonymous.</p>
                            </div>
                        </div>
                    </div>
                </div> 
                 
            } 

            return <></>
        }

        function sendToApi() {
            // get the value of the defaultChecked radio buttons
            const attentiveChecked = document.querySelector('input[name="attentive"]:checked').value
            const performanceChecked = document.querySelector('input[name="performance"]:checked').value
            const depressedChecked = document.querySelector('input[name="depressed"]:checked').value
            const anxietyChecked = document.querySelector('input[name="anxiety"]:checked').value
        
            console.log(attentiveChecked, performanceChecked, depressedChecked, anxietyChecked)
        
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify({ attentivness: attentiveChecked, performance: performanceChecked, depression: depressedChecked, anxiety: anxietyChecked })
            };
            fetch('https://media-api.archery-luna.com/api/v1/table', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data.message)
                })
            
            setTimeout(() => {
                setDataUpdated(false)
            }, 5000)
        }

        return (
            <>
            <UpdatedData />
                    <div className='grid grid-cols-1 md:grid-cols-2 my-12 gap-6 xl:gap-12 px-12'>
                        <div>
                            <h1 className='text-2xl xl:text-3xl md:px-24 mt-0 md:mt-20'><i className="fa-regular fa-clipboard"/> Would you like to participate in a survey?</h1>
                            <p>Please help us gain more accurate information by participating in the survey. The awnsers you submit are compleatly anonymous.</p>
                        </div>
                    <div className='bg-gray-300 px-3 py-3 rounded-lg '>
                        <form>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-12'>
                                <div className='grid grid-cols-2'>
                                    <h2>When understress do you feel less attentive?</h2>
                                    <div>
                                        <input type="radio" name="attentive" id="attentive"  value="1"/>
                                        <label htmlFor="attentive">Yes</label>
                                        <input type="radio" name="attentive" id="attentive" defaultChecked  value="0"/>
                                        <label htmlFor="attentive">No</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <h2>When understress do you feel less performant?</h2>
                                    <div>
                                        <input type="radio" name="performance" id="performance"  value="1"/>
                                        <label htmlFor="performance">Yes</label>
                                        <input type="radio" name="performance" id="performance" defaultChecked  value="0"/>
                                        <label htmlFor="performance">No</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <h2>When understress do you feel more depressed?</h2>
                                    <div>
                                        <input type="radio" name="depressed" id="depressed"  value="1"/>
                                        <label htmlFor="depressed">Yes</label>
                                        <input type="radio" name="depressed" id="depressed" defaultChecked  value="0"/>
                                        <label htmlFor="depressed">No</label>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <h2>When understress do you feel more anxious?</h2>
                                    <div>
                                        <input type="radio" name="anxiety" id="anxious"  value="1"/>
                                        <label htmlFor="anxious">Yes</label>
                                        <input type="radio" name="anxiety" id="anxious" defaultChecked  value="0"/>
                                        <label htmlFor="anxious">No</label>
                                    </div>
                                </div>
                            </div>
                                    
                        </form>
                        <button className='bg-slate-900 col-span-2 text-white px-4 py-2 rounded-lg mt-4 w-full' onClick={() => {
                            sendToApi()
                            setDataUpdated(true)
                        }}>Submit</button>
                    </div>
                </div>
            </>
            
    )

}
