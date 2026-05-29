const fs = require('fs');
const content = fs.readFileSync('FRONTEND/src/pages/Dashboard.tsx', 'utf-8');
if (content.includes('period: "05/28", clones: 2010')) {
  console.log('Success');
} else {
  console.log('Failed');
}
