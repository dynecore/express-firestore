const { getAuth } = require('firebase-admin/auth')

const checkAuth = async () => {
  console.danger('########################## Get Auth ##########################')

  getAuth().verifyIdToken('eyJhbGciOiJSUzI1NiIsImtpZCI6ImNjNWU0MTg0M2M1ZDUyZTY4ZWY1M2UyYmVjOTgxNDNkYTE0NDkwNWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXN0cm8tbGFtcGEiLCJhdWQiOiJhc3Ryby1sYW1wYSIsImF1dGhfdGltZSI6MTcyNTU0Mjc4MywidXNlcl9pZCI6IlZKajN4VzIwcWVRdDlVelpCOWZQckxubjN3ODMiLCJzdWIiOiJWSmozeFcyMHFlUXQ5VXpaQjlmUHJMbm4zdzgzIiwiaWF0IjoxNzI1NTQyNzgzLCJleHAiOjE3MjU1NDYzODMsImVtYWlsIjoiYWlyYUBkZW1vLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhaXJhQGRlbW8uY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.aDtRXtqrVuwyvJFtuFGMSxrU8mRsAsWdyx73W7fFNefa63kAwMn3Qw82B4zB1iAEjCKROXPA5gAXLXK4-J7OmUOKTp-qh8SBwC04PoObqhY3V1CsaGt2L8UfRG2LZxacHcRZB3TD65FZG0PV0X0t8MAkGfqOqIP_541qf9nEfbx8se7Rot-b-oOn6qCNejIBfUCyeN5BzoX8hi7B0DOEhB80EfABsHE7LhYCbTBGOU28H9jqFftvYmYZVu_gUznFNrpoXbYVUyVZJmTScfSUvh799BLXzxvjBHqegOgPJ0wvdd0G7hXOiXsEQ_oSPMRKVDVTFClZCt7jN7-rOaCr4w')
    .then((decodedToken) => {
      getAuth().getUser(decodedToken.uid).then((userRecord) => {
        console.log('Successfully fetched user data:', userRecord.toJSON())
      }).catch((error) => {
        console.log('Error fetching user data:', error)
      })
    })
}

checkAuth()
