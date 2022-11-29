export default function Input_Contact() {
    return (
        <>
              <div className="form-group">
                <input type="text" id="contact_name" name="contact_name" className="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" id="contact_email" name="contact_email" className="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Email" required />
              </div>
        </>
    )}