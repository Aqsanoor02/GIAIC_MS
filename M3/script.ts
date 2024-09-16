let form=document.getElementById('resumeForm') as HTMLFormElement;
let resumeDisplay=document.getElementById('resumeDisplay') as HTMLDivElement;

form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const number = (document.getElementById('number') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    const resumeHtml= `
    <h2>My Resume</h2>
    <h3> Personal Information</h3>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Number: ${number}</p>

    <h3> Education</h3>
    <p>Education: ${education}</p>

    <h3> Experience</h3>
    <p>Education: ${experience}</p>
    
    <h3>Skills</h3>
    <p>Education: ${skills}</p>


    `;
    if (resumeDisplay){
        resumeDisplay.innerHTML=resumeHtml;
    }else{
        console.error('The resume display is missing')
    }

})