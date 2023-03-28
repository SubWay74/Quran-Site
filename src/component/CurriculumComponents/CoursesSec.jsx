import React from 'react';
import Button from '../UI/Button';

export default function CoursesSection() {
    return (
        <>
            <section className='course-sec'>
                <div className='course-container center'>
                    <div className='right-half center'>
                        <header className='center'>
                            <h1 className='center'>
                                Learn Arabic
                                <img src="/img/learn-arabic.png" alt="" />  
                            </h1>

                        </header>
                        <div>
                            <p>Arabic is the language of the Qur'an (or Koran, the sacred book of Islam) and the religious language of all Muslims. Literary Arabic
                            <Button name="Learn More" to="/blog/learn-arabic"/>
                            </p>
                            
                        </div>
                    </div> 
                    <div className='left-half'>
                        <img src="/img/course-img.webp" alt="" />
                        <Button name="Book A Freee Trail" to="/bookfreetrail"/>
                    </div>
                </div>
                <div className='course-container center'>
                    <div className='left-half'>
                        <img src="/img/course-img.webp" alt="" />
                        <Button name="Book A Freee Trail" to="/bookfreetrail"/>
                    </div>
                    <div className='right-half center'>
                        <header className='center'>
                            <h1 className='center'>
                                Tajweel Ul-Quran
                                <img src="/img/learn-tajweed.png" alt="" />  
                            </h1>
                        </header>
                        <div>
                            <p>The Arabic word Tajweed linguistically means 'proficiency' or 'doing something well'. It comes from the same root letters as the word Jayyid, which means 'good'. 
                            <Button name="Learn More" to="/blog/tajweed"/>
                            </p>
                            
                        </div>
                    </div> 
                </div>
                <div className='course-container center'>
                    <div className='right-half center'>
                        <header className='center'>
                            <h1 className='center'>
                                Memorizatin Ul-Quran
                                <img src="/img/Quran-PNG.png" alt="" />  
                            </h1>
                        </header>
                        <div>
                            <p>Allaah has given special privileges to the one who memorizes the Qur’an in a number of ways in this world and in the Hereafter, 
                            <Button name="Learn More" to="/blog/memorization"/>
                            </p>
                            
                        </div>
                    </div> 
                    <div className='left-half'>
                        <img src="/img/course-img.webp" alt="" />
                        <Button name="Book A Freee Trail" to="/bookfreetrail"/>
                    </div>
                </div>
                <div className='course-container center'>
                    <div className='left-half'>
                        <img src="/img/course-img.webp" alt="" />
                        <Button name="Book A Freee Trail" to="/bookfreetrail"/>
                    </div>
                    <div className='right-half center'>
                        <header className='center'>
                            <h1 className='center'>
                                Learn Urdu
                                <img src="/img/learn-urdu.png" alt="" />  
                            </h1>
                        </header>
                        <div>
                            <p>Urdu is one of the cultural languages which has a rich literature and has familiarity with Hindi, Punjabi, Persian, Turkish, and Sanskrit. 
                            <Button name="Learn More" to="/blog/learn-urdu"/>
                            </p>
                            
                        </div>
                    </div> 
                </div>
                <div className='course-container center'>
                    <div className='right-half center'>
                        <header className='center'>
                            <h1 className='center'>
                                Learn Adhan
                                <img src="/img/Quran-PNG.png" alt="" />  
                            </h1>
                        </header>
                        <div>
                            <p>Lexically, adhan means to declare, to announce, to inform. As a religious term, adhan means holy words uttered in order to inform Muslims about the times of prayers. A person who calls adhan is called a muezzin.
                            <Button name="Learn More" to="/blog/adhan"/>
                            </p>
                            
                        </div>
                    </div> 
                    <div className='left-half'>
                        <img src="/img/course-img.webp" alt="" />
                        <Button name="Book A Freee Trail" to="/bookfreetrail"/>
                    </div>
                </div>
            </section>
        </>
    )
}