import axios from 'axios'

export const axiosEg=(url,data,method)=>{
	let promise=new Promise((resolve,reject)=>{
		axios({
			method:method,
			url:url,
			data:data
		}).then(res=>{
			resolve(res.data)
		}).catch((res)=>{
			reject(res)

		})
	})

	return promise;
}