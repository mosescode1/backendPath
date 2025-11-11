import { PrismaClient } from '../generated/prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'


export const prisma = new PrismaClient().$extends(withAccelerate())

async function main() {
	const data =  await prisma.role.createMany({
		data: [{name:"ADMIN", description: "Internal Admin"}, {name:"USER", description: "End User"}],
		skipDuplicates: true
	})
	
	console.log(data)
}


main().catch(console.error).finally(async () => {
	await prisma.$disconnect()
})