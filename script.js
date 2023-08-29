window.promises = [new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(`Hello Pavan !`)
		},1000)
	}),
	 new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(`hello pavan1 !`)
		},2000)
	}),
   new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(`hello pavan2 !`)
		},3000)
	}),
	 new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(`hello pavan 3!`)
		},4000)
	}),
	 new Promise((reject)=>{
		setTimeout(()=>{
			reject(`hello pavan 4!`)
		},500)
	})];

// Do not change the code above this
// add your promises to the array `promises`
 let output=document.getElementById("output");
let result = Promise.any([
	 new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(`Hello Pavan !`)
		},1000)
	}),
	 new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(`hello pavan1 !`)
		},2000)
	}),
   new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(`hello pavan2 !`)
		},3000)
	}),
	 new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(`hello pavan 3!`)
		},4000)
	}),
	 new Promise((reject)=>{
		setTimeout(()=>{
			reject(`hello pavan 4!`)
		},500)
	})
])
result.then((data)=>{
	output.innerText=data;
})