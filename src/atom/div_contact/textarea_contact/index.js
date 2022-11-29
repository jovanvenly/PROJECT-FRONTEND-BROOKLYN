export default function Textarea_Contact() {
    return (
        <>
            <div className="form-group">
                <textarea rows={4} id="contact_message" name="contact_message" className="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Message" required defaultValue={""} />
            </div>
        </>
    )}