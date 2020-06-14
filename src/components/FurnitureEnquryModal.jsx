import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import FurnitureEnquiryForm from 'components/FurnitureEnquiryForm'

export default function FurnitureEnquiryModal ({ open, onClose, furniture }) {
  return <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Enquiry: {furniture.title}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Get in touch with us to order your own bespoke {furniture.title}.
      </DialogContentText>
      <FurnitureEnquiryForm subject={`Enquiry regarding ${furniture.title}`} meta={furniture} onCancel={onClose} />
    </DialogContent>
  </Dialog>
}
