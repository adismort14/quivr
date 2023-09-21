import { useTranslation } from "react-i18next";
import { MdAdd } from "react-icons/md";

import Button from "@/lib/components/ui/Button";
import { Modal } from "@/lib/components/ui/Modal";
import { Brain } from "@/lib/context/BrainProvider/types";

type PublicBrainItemProps = {
  brain: Brain;
};

export const PublicBrainItem = ({
  brain,
}: PublicBrainItemProps): JSX.Element => {
  const { t } = useTranslation("brain");

  const subscribeButton = (
    <Button className="bg-purple-600 text-white p-0 px-3 rounded-xl border-0 w-content mt-3">
      {t("public_brain_subscribe_button_label")}
      <MdAdd className="text-md" />
    </Button>
  );

  return (
    <Modal
      CloseTrigger={<div />}
      Trigger={
        <div className="flex justify-center items-center flex-col w-full h-full shadow-md dark:shadow-primary/25 hover:shadow-xl transition-shadow rounded-xl overflow-hidden bg-white dark:bg-black border border-black/10 dark:border-white/25 md:p-5 cursor-pointer">
          <p className="font-bold mb-5 text-xl">{brain.name}</p>
          <p className="line-clamp-2 text-center px-5">
            {brain.description ?? ""}
          </p>
          {subscribeButton}
        </div>
      }
    >
      <div>
        <p className="text-2xl font-bold text-center mb-10">{brain.name}</p>
        <p className="mb-10">{brain.description ?? ""}</p>

        <p className="font-bold mb-5">
          <span>Last update:</span>
        </p>
        <div className="flex flex-1 justify-end">{subscribeButton}</div>
      </div>
    </Modal>
  );
};