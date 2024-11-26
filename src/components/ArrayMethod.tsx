import { useRef } from 'react';

function ArrayMethod() {

    let words = ["Beautiful", "Wonderful", "Joyful", "Careful", "Grateful"];

    let marksArr = [78, 85, 92, 24, 74, 88, 90, 61, 79, 83, 35, 70, 82, 96, 68, 45, 88, 73, 92, 18, 81, 69, 97, 56, 89, 75, 62, 84, 90, 77]

    let outputRef:any = useRef();

  return (
    <div>
        
        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let sum=0;
            marksArr.forEach((i)=>{
                sum+=i;
            });
            console.log(marksArr);
            console.log(sum);
            outputRef.current.innerHTML = `forEach : ${sum}`;
        }}>forEach</button>
        <div ref={outputRef}></div>
        </div>
        

        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let result = marksArr.every((ele)=>{
                return ele>35;
            })
            if(result == true){
                const output = "passed";
                console.log(output);
                outputRef.current.innerHTML = output;
            }else{
                const output = "failed";
                console.log(output);
                outputRef.current.innerHTML = output;
            }
        }}>every</button>
        <div ref={outputRef}></div>
        </div>


        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let result = marksArr.some((ele)=>{
                return ele>35;
            })
            if(result == true){
                const output = "passed";
                console.log(output);
                outputRef.current.innerHTML = output;
            }else{
                const output = "failed";
                console.log(output);
                outputRef.current.innerHTML = output;
            }
        }}>some</button>
        <div ref={outputRef}></div>
        </div>


        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let result = marksArr.filter((ele)=>{
                return ele>80;
            })          
            console.log(result);
            outputRef.current.innerHTML = result;
        }}>filter</button>
        <div ref={outputRef}></div>
        </div>


        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let result = marksArr.find((ele)=>{
                return ele>55;
            })          
            console.log(result);
            outputRef.current.innerHTML = result;
        }}>find</button>
        <div ref={outputRef}></div>
        </div>


        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let result = marksArr.findIndex((ele)=>{
                return ele>85;
            })          
            console.log(result);
            outputRef.current.innerHTML = result;
        }}>findIndex</button>
        <div ref={outputRef}></div>
        </div>


            <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let result = marksArr.findLast((ele)=>{
                return ele>70;
            })          
            console.log(result);
            outputRef.current.innerHTML = result;
        }}>findLast</button>
        <div ref={outputRef}></div>
        </div>


        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let result = marksArr.findLastIndex((ele)=>{
                return ele>90;
            })          
            console.log(result);
            outputRef.current.innerHTML = result;
        }}>findLastIndex</button>
        <div ref={outputRef}></div>
        </div>


        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let result=marksArr.reduce((total,element)=>{
                return total-element;
            })          
            console.log(result);
            outputRef.current.innerHTML = result;
        }}>reduce</button>
        <div ref={outputRef}></div>
        </div>


        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let result=marksArr.reduceRight((total,element)=>{
                return total/element;
            })          
            console.log(result);
            outputRef.current.innerHTML = result;
        }}>reduceRight</button>
        <div ref={outputRef}></div>
        </div>
        

        <div className='buttonDiv'>
        <button type="button" onClick={()=>{
            let result= words.map((ele)=>{
                return ele+"ful";
            })          
            console.log(result);
            outputRef.current.innerHTML = result;
        }}>map</button>
        <div ref={outputRef}></div>
        </div>

       
    </div>
  )
}

export default ArrayMethod;