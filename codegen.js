import { exec } from 'child_process'
import fs from 'fs'

const apiServices = ['global', 'preferences', 'profile', 'serviceMap']

apiServices.forEach(service => {
	if (fs.existsSync(`${service}Api`)) {
		exec(`npm run api-models:${service}`)
	}
})
