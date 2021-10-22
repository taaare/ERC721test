const Cheesecake = artifacts.require('./Cheesecake.sol')

require ('chai')
	.use(require('chai-as-promised'))
	.should()

contract('Cheesecake', (accounts) => {
	let contract

	before(async () => {
		contract = await Cheesecake.deployed()
	})

	describe('deployment', async() => {
		it('deploys succesfully', async() => {
		
			const address = contract.address
			console.log(address)
			assert.notEqual(address, 0x0)
			assert.notEqual(address, '')
			assert.notEqual(address, null)
			assert.notEqual(address, undefined)

		})

		it('has a name', async () => {
			const name = await contract.name()
			assert.equal(name, 'Cheesecake')
		})

		it('has a symbol', async () => {
			const symbol = await contract.symbol()
			assert.equal(symbol, 'CHEESE')
		})
	})

	describe('minting', async () => {

		it('creates a new token', async () => {
			const result = await contract.mint('Chocolate')
			const totalSupply = await contract.totalSupply()
			// SUCCESS
			assert.equal(totalSupply, 0)
		})
	})
})