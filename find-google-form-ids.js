// Script to find Google Form field IDs
// Paste this in your browser console when viewing your Google Form

// Method 1: Find all entry fields
function findFormFields() {
  const inputs = document.querySelectorAll('input[name^="entry."], textarea[name^="entry."]');
  console.log('=== Google Form Field IDs ===');
  
  inputs.forEach((input, index) => {
    const label = document.querySelector(`label[for="${input.id}"]`) || 
                  document.querySelector(`div[aria-label]`) ||
                  input.closest('[role="listitem"]')?.querySelector('.exportItemTitle');
    
    const fieldName = label?.textContent?.trim() || `Field ${index + 1}`;
    const fieldId = input.name;
    
    console.log(`${fieldName}: ${fieldId}`);
  });
  
  return inputs;
}

// Method 2: Alternative approach using data-item-id
function findFormFieldsAlt() {
  console.log('=== Alternative Method - Data Item IDs ===');
  const items = document.querySelectorAll('[data-item-id]');
  
  items.forEach((item) => {
    const title = item.querySelector('.exportItemTitle')?.textContent?.trim();
    const itemId = item.getAttribute('data-item-id');
    
    if (title && itemId) {
      console.log(`${title}: entry.${itemId}`);
    }
  });
}

// Run both methods
console.log('Finding Google Form field IDs...');
findFormFields();
findFormFieldsAlt();
