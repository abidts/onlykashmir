// Open your Google Form: https://docs.google.com/forms/d/e/1FAIpQLSejKmlWTIXyMOc-_reDhDOV61rSS6o92UrNz3kaB8bP7UpTtg/viewform
// Then paste this script in browser console (F12)

console.log('🔍 Finding Google Form Field IDs...');

// Method 1: Direct input elements
const inputs = document.querySelectorAll('input[name^="entry."], textarea[name^="entry."]');
console.log('\n=== METHOD 1: Input Elements ===');

inputs.forEach((input, index) => {
  const label = document.querySelector(`label[for="${input.id}"]`) || 
                input.closest('[role="listitem"]')?.querySelector('.exportItemTitle') ||
                input.closest('.quantumWizTextinputPaperinputEl')?.querySelector('.exportLabel');
  
  const fieldName = label?.textContent?.trim() || `Field ${index + 1}`;
  const fieldId = input.name;
  
  console.log(`📝 ${fieldName}: ${fieldId}`);
});

// Method 2: Data item IDs
console.log('\n=== METHOD 2: Data Item IDs ===');
const items = document.querySelectorAll('[data-item-id]');

items.forEach((item) => {
  const title = item.querySelector('.exportItemTitle, .exportLabel')?.textContent?.trim();
  const itemId = item.getAttribute('data-item-id');
  
  if (title && itemId && !title.includes('Submit')) {
    console.log(`📝 ${title}: entry.${itemId}`);
  }
});

// Method 3: Data params (newer Google Forms)
console.log('\n=== METHOD 3: Data Params ===');
const paramsElements = document.querySelectorAll('[data-params]');

paramsElements.forEach((element) => {
  const params = element.getAttribute('data-params');
  const match = params?.match(/\[\[(\d+),/);
  const title = element.querySelector('.exportItemTitle, .exportLabel')?.textContent?.trim();
  
  if (match && title && !title.includes('Submit')) {
    console.log(`📝 ${title}: entry.${match[1]}`);
  }
});

console.log('\n✅ Copy the correct IDs into your CallbackPopup.tsx:');
console.log('const GOOGLE_FORM_FIELDS = {');
console.log('  name: "entry.XXXXX",    // FULL NAME');
console.log('  email: "entry.XXXXX",   // EMAIL');
console.log('  phone: "entry.XXXXX"    // PHONE NUMBER');
console.log('};');
