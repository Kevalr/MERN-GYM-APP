import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  return (
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
      ContactUs
    </motion.div>
  );
};

export default ContactUs;
