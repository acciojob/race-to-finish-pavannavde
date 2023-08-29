window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
 let output=document.getElementById("output");
let result = Promise.any(()=>{
	const promise1 = new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(`Hello Pavan !`)
		},1000)
	})
	const promise2 = new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(`hello pavan !`)
		},2000)
	})
		const promise3 = new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(`hello pavan !`)
		},3000)
	})
		const promise4 = new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(`hello pavan !`)
		},4000)
	})
	const promise5 = new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(`hello pavan !`)
		},5000)
	})
})
result.then((data)=>{
	output.innerText=data;
})