import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from "../UI/Button";


export default function OurCurriculum() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5.3
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3.3
        },
        tablet: {
        breakpoint: { max: 1024, min: 780 },
        items: 2.3
        },
        minTablet: {
        breakpoint: { max: 780, min: 480 },
        items: 1.7
        },
        mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 1.3
        }
    };

    const handleFileClick = (file) => {
        window.open(file)
    } 

    return(
        <section className="curriculum-sec">
            <header className="center">
                <h1>
                Our Curriculum
                </h1>
            </header>
            <Carousel responsive={responsive}>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>1st module</h1>
                        <hr />
                        <div className="card-p">
                        <p>1st class of 1st module:huruful hija alif to ya complete all letters with correct pronunciation.</p>
                        <p>2nd class of 1st module: Hurufe tahajji ki mashkq, mukhtalif aawaz wale huruf jinka makhraj ek hi h.</p>
                        <p>3rd class of 1st module: Huruf ki badalti hui shaklein, Kalimaath part1</p>
                        <p>4th class of 1st module kalimath part2 kalimath</p>
                        <p>5th class of 1st module: part 3. Kalimath completed.</p>
                        <p>6th class of 1st module: Imtehan. Sabaq.</p>
                        <p>7th class of 1st module: All tests of 1st module.</p>
                        </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/1st-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>2nd Module</h1>
                        <hr />
                        <div className="card-p">
                            <p>8th class of 2nd module: sabaq no.3 harkaath.</p>
                            <p>9th class of 2nd module: Sabaq no.3 zer.</p>
                            <p>10 th class of 2nd module: sabaq no.3 pesh.</p>
                            <p>11 th class of 2nd module: sabaq no.4 hurufe maddah me se alif maddah.</p>
                            <p>12 th class of 2nd module: yaa maddah.</p>
                            <p>13 th class of 2nd module: waw maddah.</p>
                            <p>14 th class of 2nd module: test of harkaath to hurufe maddah completed.</p>
                        </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/2nd-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>3rd module</h1>
                        <hr />
                        <div className="card-p">
                            <p>15th class of 3rd module: sabaq no.5 khada zabar.</p>
                            <p>16th class of module: khadi zer.</p>
                            <p>17th class of module” ulta pesh.</p>
                            <p>18th class of 3rd module: sabaq no.6 hurufe leen (wao leen)</p>
                            <p>19 th class module: yaa leen.</p>
                            <p>20 th class of 3rd module: imtehan.</p>
                            <p>21 th class of module: all test of 3rd module.</p>
                        </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/3rd-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>4th Module</h1>
                        <hr />
                        <div className="card-p">
                            <p>22 th class: sabaq no.7 qalqala part1</p>
                            <p>23 th class : qalqala part2 completed.</p>
                            <p>24 th class: sabaq no.8 tashdeed part1</p>
                            <p>25 th class: tashdeed part2 completed.</p>
                            <p>26 th class: Sabaq no.9 wo huruf likhe jaate h mgr padhe nhi jaate. Part 1</p>
                            <p>27th class: part 2 sabaq no.9</p>
                            <p>28th class: test of 4th module.</p>
                        </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/4th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>5th module</h1>
                        <hr />
                        <div className="card-p">
                            <p>29th class: sabaq no.9 part 3</p>
                            <p>30th class: sabaq no.9 part 4</p>
                            <p>31th class : sabaq no.9 part 5</p>
                            <p>32 th class: sabaq no.9 part 6</p>
                            <p>33th class: sabaq no.9 part 7</p>
                            <p>34 th class: sabaq no.9 part 8</p>
                            <p>35 th class: all test of 5th module.</p>
                        </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/5th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>6th module</h1>
                        <hr />
                        <div className="card-p">
                            <p>36 th class: sabaq no.10 tanween(do zabar)</p>
                            <p>37 th class: do zer.</p>
                            <p>38 th class: do pesh.</p>
                            <p>39 th class: sabaq no.11 tanween o noone sakin completed.</p>
                            <p>40th class: sabaq no.12 ikhfa. part1</p>
                            <p>41 th class: iqfa part 2 completed</p>
                            <p>42th class: all test of 6 th module.</p>
                        </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/6th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>7th module</h1>
                        <hr />
                        <div className="card-p">
                            <p>43 th class: sabaq no.13 iqlab part 1</p>
                            <p>44 th class: iqlab part 2 completed</p>
                            <p>45 th class: sabaq no.14 izhar part 1</p>
                            <p>46 th class: izhar part 2</p>
                            <p>47 th class:idgham sabaq no.14. Part 1</p>
                            <p>48 th class: idgham part 2</p>
                            <p>49 th class: idgham part 3 completed</p>
                            <p>50 th class: all test of 7 th module.</p>
                        </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/7th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>8th module</h1>
                        <hr />
                        <div className="card-p">
                            <p>51 class: idgham ki mazeed aqsam (sabaq no.15) part 1</p>
                            <p>52 th class: idgham ki mazeed aqsam part2 completed.</p>
                            <p>53th class: sabaq no.16 meme sakin k qaede.part 1</p>
                            <p>54th class: meme sakin k qaede part2 completed.</p>
                            <p>55th class: sabaq no.16 lafze Allah. Part 1</p>
                            <p>56th class: all test of 8th module.</p>
                        </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/8th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>9th module</h1>
                        <hr />
                        <div className="card-p">
                            <p>57 class: waqf ka bayan: part1</p>
                            <p>58th class: waqf ka byan part2</p>
                            <p>59th class: waqf ka bayan part3</p>
                            <p>60th class: waqf ka bayan part 4</p>
                            <p>61th class: rumuze auqaf ka bayan part 1</p>
                            <p>62 th class: rumuze auqaf part2 completed</p>
                            <p>63 th class: test of all 9 th modules.</p>
                        </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/9th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>10 th module</h1>
                        <hr />
                        <div className="card-p">
                            <p>64th class: hamzah wasli aur noone qutni part 1</p>
                            <p>65 th class: noone qutni part 2</p>
                            <p>66th class: none qutni part3 completed</p>
                            <p>67th class: raa k ahkam part 1</p>
                            <p>68th class: part2</p>
                            <p>69th class :part 3</p>
                            <p>70 th class: part 4 raa k ahkam completed</p>
                            <p>71 th class: all test of 10 th module.</p>
                        </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/10th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>11 th module</h1>
                        <hr />
                        <div className="card-p">
                            <p>72th class: Madd ka bayan: part 1</p>
                            <p>73 th class: madd part 2</p>
                            <p>74 th class: madd part 3</p>
                            <p>75 th class: madd part 4 completed</p>
                            <p>76 th class: hurufe muqattaat part 1</p>
                            <p>77th class: muqattaat part2 completed</p>
                            <p>78 class: all test of 11 th module.</p>
                        </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/11th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
                <div className="container-card center">
                    <div className="card-disc center">
                        <h1>12th module</h1>
                        <hr />
                        <div className="card-p">
                            <p>79 th class: chand mazeed makhsoos qawaed ki mashqpart 1</p>
                            <p>80 th class: part 2</p>
                            <p>90 th class: part 3</p>
                            <p>91 class: part 4</p>
                            <p>92 class: imtehan last</p>
                            <p>93 th class: all test of 12 th module.</p>
                            <p>94 th class : All test of qaedah.</p>
                        </div>
                        <a onClick={() => {handleFileClick("/files/Curriculum/12th-module-curriculum.pdf")}}>View Detailed Curriculum</a>
                    </div>
                    <div className="card-learn center">
                        <h1>00.00 US$</h1>
                        <Button name="Book A Free Trail" to="/bookfreetrail" />
                    </div>
                </div>
            </Carousel>;
        </section>
    )
}