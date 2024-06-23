document.getElementById('submit-button').addEventListener('click',function(){
    const date=new Date();
    const newDate= ''+date.getHours()+':'+date.getMinutes()+' '+date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear() ;
    const newTitle=document.getElementById('note-title').value+'';
    const newText=document.getElementById('note-text').value+'';
    if(newText=='' && newTitle==''){
        alert('add some text');
    }else{
        const cardHeaderDiv = document.createElement('div');
        cardHeaderDiv.className='card-header';
        cardHeaderDiv.innerText=newDate;

        const cardTitleH5 = document.createElement('h5');
        cardTitleH5.className='card-title';
        cardTitleH5.innerText=newTitle;

        const cardTextP = document.createElement('p');
        cardTextP.className='card-text';
        cardTextP.innerText=newText;

        const noteDiv = document.createElement('div');
        noteDiv.className='card text-bg-dark mb-3 note';
        noteDiv.style='max-width: 18rem;';
        noteDiv.appendChild(cardHeaderDiv);
        noteDiv.appendChild(cardTitleH5);
        noteDiv.appendChild(cardTextP);

        const allNotesContainer=document.getElementById('all-notes-container');
        allNotesContainer.appendChild(noteDiv);
    }
})