# js-form-validation
1) Using validations, we check whether the input is valid or not.
2) There are two types of validations: client-side and server-side.
3) Using JavaScript, we can only perform client-side validation.
4) In client-side validation, there are two types:
    1) **Built-in HTML validations**  
       - These are validations provided by HTML attributes such as `required`, `minlength`, `maxlength`, `pattern`, `type`, etc.  
       - The browser automatically checks these before submitting the form.
    2) **Custom JavaScript validations**  
       - Here, we write JavaScript code to validate form fields according to custom rules.  
       - This allows for more complex checks, such as comparing two fields, checking for specific formats, or making asynchronous checks.

**Note:**  
- Client-side validation improves user experience by providing instant feedback, but it can be bypassed.  
- Always perform server-side validation as well to ensure data integrity and security.