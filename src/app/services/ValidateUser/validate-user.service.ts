import { Injectable } from '@angular/core';

type Name = 'Name' | 'Lastname'
type Validate = 'Save' | 'Load'

@Injectable({
  providedIn: 'root'
})
export class ValidateUserService {

  constructor() {
    this.Form
  }

  Form = {
    CC: {
      // Numbers:
      Numbers: /\d/,
    },
    Name: {
      // Special Characters:
      SpecialCharacters: /[!-/:-@\[-`\{-~¿¡°]/,
      // Numbers:
      Numbers: /\d/,
      // Multi-Space characters:
      MultiSpace: /[\s]{2,}/,
    },
    Email: {
      // Check Email Address: (Gmail rules) + include dash, underscore.
      Pattern: /^((?!^[._-])(?![-_.]{2,})[a-zñ0-9._-]){5,29}[a-zñ0-9]+@(([\w-]+\.)+[\w-]{2,4})$/,
      // Check include one @.
      Symbol: /@/,
      // MailUserNameM (Gmail rules): Gmail!! + include dash, underscore.
      UserName: /^((?!^[._-])(?![-_.]{2,})[a-zñ0-9._-]){5,29}[a-zñ0-9](?=@)/,
      // MailDomain: Check the email domain structure.
      Domain: /(?<=@)(([\w-]+\.)+[\w-]{2,4})$/,
      // Special Characters:
      SpecialCharacters: /([!-,\/:-@\[-\^`\{-~¿¡°])(?=@)/,
      // Space Characters:
      Spaces: /\s+/,
      // Init Special Characters:
      InitSCharacter: /^([!-/:-@\[-`\{-~¿¡°])/,
      // Consecutive Special Characters:
      MultiSCharacter: /[_.-]{2,}/,
      // Capital Letter - No Acent:
      CapitaLetter: /[A-ZÑ]/,
      // Username don't finish special character
      CharArroba: /([ -/:-@\[-`\{-~¿¡°])(?=@)/, // /[\x20-\x2f\x3a-\x40\x5b-\x60\x7b-\x81](?=@)/  <-- HEXA
      // Acent Characters:
      AcentCharacters: /[À-ÆÈ-ÏÒ-ÖÙ-Ýà-æè-ïò-öù-ýÿ]/
    },
    Password: {
      // Check Password:
      Pattern: /^[A-Za-z!-/:-@\[-`\{-~Ññ¿¡°\d]{8,32}$/,
      // Space Characters:
      Spaces: /\s+/,
      // Acent Characters:
      AcentCharacters: /[À-ÆÈ-ÏÒ-ÖÙ-Ýà-æè-ïò-öù-ýÿ]/,
      // Capital Letter - No Acent:
      CapitaLetter: /[A-ZÑ]/,
      // Lowercase Letter - No Acent:
      LowercaseLetter: /[a-zñ]/,
      // Special Characters:
      SpecialCharacters: /[!-/:-@\[-`\{-~¿¡°]/,
      // Numbers:
      Numbers: /\d/,
    },
    Phone: {
      PhoneCol: /^((60[1-8])|3(0[0-5]|1[0-9]|2[0-4]|33|5[0-1]))\d{7}/, // Phone numbers in Colombia
      // Numbers:
      Numbers: /\d/,
    },
    MaritalS: {
      Status: /(SOLTER(O|A)|CASAD(O|A)|SEPARAD(O|A)|DIVORCIAD(O|A)|VIUD(O|A))/i,
      // Multi-Space characters:
      MultiSpace: /[\s]{2,}/,
      // Numbers:
      Numbers: /\d/,
      // Special Characters:
      SpecialCharacters: /[!-/:-@\[-`\{-~¿¡°]/,
      // Acent Characters:
      AcentCharacters: /[À-ÿ]/,
    },
    CreditCard:{
      VISA : /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
      MASTERCARD : /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
      AMEX : /^3[47][0-9-]{16}$/,
      CABAL : /^(6042|6043|6044|6045|6046|5896){4}[0-9]{12}$/,
      NARANJA :   /^(589562|402917|402918|527571|527572|0377798|0377799)[0-9]*$/,
    }

  }

  /*****************************************************************************************/
  /*****************************      CC NUMBRE VALIDATE       *****************************/
  /*****************************************************************************************
   * ValidateCC: Validate the ID field
   * @param Id : string | number
   * @returns [{ state: boolean, message: string }]
   * state: false (error) || true (success)
   * message: "<error description>" (state:false) || "" (state:true)
   */
  ValidateCC(Id: string | number): { state: boolean, message: string } {
    var msn: string = ""

    if (typeof (Id) == "number") {
      Id = Id.toString();
    }

    if (Id.trim() == "" || Id.trim() == null || Id.trim() == undefined) {
      msn += 'The ID number is required.'
    }
    else {
      if (!this.Form.CC.Numbers.test(Id.trim()) == true) {
        msn += "Remove non-Numeric characters."
      }

      if (this.Form.CC.Numbers.test(Id.trim()) == true && (8 > Id.trim().length || Id.trim().length > 12)) {
        if (msn != "") { msn += "\n" }
        msn += "Write 8 to 20 numerical digits."
      }
    }
    if (msn == "") {
      return { state: true, message: msn }
    } else {
      return { state: false, message: msn }
    }
  }

  /*****************************************************************************************/
  /*****************************    NAME & LASTNAME VALIDATE   *****************************/
  /*****************************************************************************************
   * ValidateName: Validate the Name or Lastname
   * @param Name String input variable
   * @param Type Type of field to validate: 'Name' (default) || 'Lastname'.
   * @returns [{ state: boolean, message: string }]
   * state: false (error) || true (success)
   * message: "<error description>" (state:false) || "" (state:true)
   */
  ValidateName(Name: string, Type: Name = 'Name'): { state: boolean, message: string } {
    var msn: string = ""

    // This field is required.
    if (Name.trim() == "" || Name.trim() == null || Name.trim() == undefined) {
      msn += `The ${Type} is required.`
    }
    else {
      // The field contain many spaces between names.
      if (this.Form.Name.MultiSpace.test(Name.trim()) == true) {
        msn += `Delete multi-spaces between ${Type}s.`
      }

      // The field must not contain numbers.
      if (this.Form.Name.Numbers.test(Name.trim()) == true) {
        if (msn != "") { msn += "\n" }
        msn += `The ${Type} mustn't contain numbers.`
      }

      // The field must not contain name(s) of more than 15 characters.
      if (Math.max(...Name.trim().split(' ').map(p => p.length)) > 15) {
        if (msn != "") { msn += "\n" }
        msn += `Delete words longer than 15 characters.`
      }

      // The field must not contain name(s) of less than 3 characters.
      if (Math.min(...Name.trim().split(' ').map(p => p.length)) < 3) {
        if (msn != "") { msn += "\n" }
        msn += `Remove words of less than 3 characters`
      }

      // The name must not contain special characters..
      if (this.Form.Name.SpecialCharacters.test(Name.trim()) == true) {
        if (msn != "") { msn += "\n" }
        msn += `Remove special characters from the ${Type}.`
      }
    }

    if (msn == "") {
      return { state: true, message: msn }
    } else {
      return { state: false, message: msn }
    }
  }

  /*****************************************************************************************/
  /*****************************         EMAIL VALIDATE        *****************************/
  /*****************************************************************************************
   * ValidateEmail: Validate email field
   * @param Email string
   * @param Validate 'save' || 'load' (default)
   * @returns { state: boolean, message: string }
   * state: false (error) || true (success)
   * message: "<error description>" (state:false) || "" (state:true)
   */
  ValidateEmail(Email: string, Validate: Validate = 'Load'): { state: boolean, message: string } {
    var msn: string = ""

    // This field is required.
    if (Email.trim() == "" || Email.trim() == null || Email.trim() == undefined) {
      msn += 'The Email is required.'
    }
    else {
      if (Validate == 'Load') {
        if (this.Form.Email.Pattern.test(Email.trim()) == false) {
          msn += "The Email entered is invalid."
        }
      }
      else if (Validate == 'Save') {
        // The email must contain @ symbol.
        if (Email.match(this.Form.Email.Symbol)?.length != 1) {
          if (msn != "") { msn += "\n" }
          msn += "Add only one @ symbol."
        }

        // Only the use of '._-@' is supported..
        if (this.Form.Email.SpecialCharacters.test(Email.trim()) == true) {
          msn += "Username email only supports '._-' characters."
        }

        // The email contain spaces.
        if (this.Form.Email.Spaces.test(Email.trim()) == true) {
          if (msn != "") { msn += "\n" }
          msn += "Remove spaces."
        }

        // Only the use of '._-@' is supported..
        if (this.Form.Email.CapitaLetter.test(Email.trim()) == true) {
          msn += "Remove capital letters."
        }

        // The email must not start with a special characters.
        if (this.Form.Email.InitSCharacter.test(Email.trim()) == true) {
          if (msn != "") { msn += "\n" }
          msn += "Remove special characters at start."
        }

        // The email must not end with a period.
        if (this.Form.Email.CharArroba.test(Email.trim()) == true) {
          if (msn != "") { msn += "\n" }
          msn += "remove special characters at end."
        }

        // The email must not start with a special characters.
        if (this.Form.Email.MultiSCharacter.test(Email.trim()) == true) {
          if (msn != "") { msn += "\n" }
          msn += "Remove consecutive special characters."
        }
      }}
    if (msn == "") {
      return { state: true, message: msn }
    } else {
      return { state: false, message: msn }
    }
  }

  /*****************************************************************************************/
  /*****************************       PASSWORD VALIDATE       *****************************/
  /*****************************************************************************************
   * ValidatePassword: validate Password field
   * @param Password string
   * @param Validate 'save' || 'load' (default)
   * @returns { state: boolean, message: string }
   * state: false (error) || true (success)
   * message: "<error description>" (state:false) || "" (state:true)
   */
  ValidatePassword(Password: string, Validate:Validate = 'Load'): { state: boolean, message: string } {
    var msn: string = ""

    // This field is required.
    if (Password.trim() == "" || Password.trim() == null || Password.trim() == undefined) {
      msn += "The Password is required."
    }
    else {
      if (Validate=='Load'){
        if (this.Form.Password.Pattern.test(Password.trim()) == false) {
          msn += "The Password entered is invalid.";
        }
      }
      else if (Validate=='Save'){
      // The field contain spaces.
      if (this.Form.Password.Spaces.test(Password.trim()) == true) {
        msn += "Remove spaces.";
      }

      // The field contain acent characters.
      if (8 > Password.trim().length || Password.trim().length > 20) {
        if (msn != "") { msn += "\n" }
        msn += "Write 8 to 20 characters.";
      }

      // The field contain acent characters.
      if (this.Form.Password.AcentCharacters.test(Password.trim()) == true) {
        if (msn != "") { msn += "\n" }
        msn += "Remove acent characters.";
      }

      // The field contain 1 capial letter.
      if (this.Form.Password.CapitaLetter.test(Password.trim()) == false) {
        if (msn != "") { msn += "\n" }
        msn += "Add at least 1 capital letter."
      }

      // The field contain 1 lowercase letter.
      if (this.Form.Password.LowercaseLetter.test(Password.trim()) == false) {
        if (msn != "") { msn += "\n" }
        msn += "Add at least 1 lowercase letter."
      }

      // The field contain 1 number.
      if (this.Form.Password.Numbers.test(Password.trim()) == false) {
        if (msn != "") { msn += "\n" }
        msn += "Add at least 1 number."
      }

      // The field contain 1 special character.
      if (this.Form.Password.SpecialCharacters.test(Password.trim()) == false) {
        if (msn != "") { msn += "\n" }
        msn += "Add at least 1 special character."
      }
    }}

    if (msn == "") {
      return { state: true, message: msn }
    } else {
      return { state: false, message: msn }
    }
  }

  /*****************************************************************************************/
  /**************************    CONFIRM PASSWORD VALIDATE     *****************************/
  /*************************************************************************************
   * ValidateConfirmPassword: Validate Password field == ConfirmPassword field.
   * @param ConfirmPassword string
   * @param Password string
   * @returns { state: boolean, message: string }
   * state: false (error) || true (success)
   * message: "<error description>" (state:false) || "" (state:true)
   */
  ValidateConfirmPassword(ConfirmPassword: string, Password: string): { state: boolean, message: string } {
    // This field is required.
    if (ConfirmPassword.trim() == "" || ConfirmPassword.trim() == null || ConfirmPassword.trim() == undefined) {
      return { state: false, message: "Retype your Password." }
    }
    else if (ConfirmPassword != Password) {
      return { state: false, message: "Passwords did not match" }
    } else {
      return { state: true, message: "" }
    }
  }

  /*****************************************************************************************/
  /**************************         PHONE VALIDATE           *****************************/
  /*************************************************************************************
   * ValidatePhone: Validate Phone Colombia.
   * @param Phone string | number
   * @returns { state: boolean, message: string }
   * state: false (error) || true (success)
   * message: "<error description>" (state:false) || "" (state:true)
   */
  ValidatePhone(Phone: string): { state: boolean, message: string } {
    var msn: string = ""

    if (Phone.trim() == "" || Phone.trim() == null || Phone.trim() == undefined) {
      msn += 'The Phone is required.'
    }
    else {
      if (!this.Form.Phone.Numbers.test(Phone.trim()) == true) {
        msn += "Remove non-Numeric characters."
      }
    }

    if (msn == "") {
      return { state: true, message: msn }
    } else {
      return { state: false, message: msn }
    }
  }

  /*****************************************************************************************/
  /**************************      MARITAL STATUS VALIDATE     *****************************/
  /*************************************************************************************
   * ValidateMaritalS: Validate MaritalS.
   * @param MaritalS string
   * @returns { state: boolean, message: string }
   * state: false (error) || true (success)
   * message: "<error description>" (state:false) || "" (state:true)
   */
  ValidateMaritalS(MaritalS: string): { state: boolean, message: string } {
    var msn: string = ""

    if (MaritalS.trim() == "" || MaritalS.trim() == null || MaritalS.trim() == undefined) {
      msn += "The Marital Status is required."
    }
    else {
      // The field contain many spaces between names.
      if (this.Form.MaritalS.MultiSpace.test(MaritalS.trim()) == true) {
        msn += "The Marital Status contain many spaces between nouns."
      }

      // The field must not contain numbers.
      if (this.Form.MaritalS.Numbers.test(MaritalS.trim()) == true) {
        if (msn != "") { msn += "\n" }
        msn += "The Marital Status mustn't contain numbers."
      }

      // The name must not contain special characters..
      if (this.Form.MaritalS.SpecialCharacters.test(MaritalS.trim()) == true) {
        if (msn != "") { msn += "\n" }
        msn += "The Marital Status contain special characters."
      }

      // The name must not contain special characters..
      if (this.Form.MaritalS.AcentCharacters.test(MaritalS.trim()) == true) {
        if (msn != "") { msn += "\n" }
        msn += "The Marital Status mustn't contain acent characters."
      }

      // The name must not contain special characters..
      if (this.Form.MaritalS.Status.test(MaritalS.trim()) == false) {
        if (msn != "") { msn += "\n" }
        msn += "The Marital Status value is not correct."
      }
    }

    if (msn == "") {
      return { state: true, message: msn }
    } else {
      return { state: false, message: msn }
    }
  }

}


