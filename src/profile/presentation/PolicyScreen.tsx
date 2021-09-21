import React from "react";
import { Box, Text, ScrollView } from "native-base";

const PolicyScreen: React.FC = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
    });
  });
  return (
    <Box flex={1}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        px={4}
        pt={4}
        flex={1}
        bg="white"
      >
        <Text fontSize="lg" mt={4}>
          Welcome to Kopi Kuy application (the "App") whereby you can place your
          order and participate in our rewards program by collecting points
          every time you buy our products through the App (the "Service"). Kopi
          Kuy would like to give you the best Service through the App and hope
          that by using the App you can experience the simplicity way to get our
          product and enjoy our product with convenience.
          {"\n"}
          {"\n"}
          PLEASE READ THESE TERMS OF SERVICE CAREFULLY. BY USING OUR
          APPLICATION, OPENING ACCOUNT OR PARTICIPATING IN OUR PROGRAM, YOU
          AGREE TO ACCEPT AND BE BOUND BY THESE TERMS OF SERVICE. IF YOU DO NOT
          AGREE TO THESE TERMS OF USE, PLEASE DO NOT USE THE APP, OPEN ACCOUNT
          OR PARTICIPATE OUR PROGRAM.
          {"\n"}
          {"\n"}
          Kopi Kuy reserves the rights to change, modify, suspend or terminate
          the App or the Service or any part of thereof, at any time and for any
          reason. You are prohibited to mirror or frame any part or whole of the
          contents of the App, and change or modify the App, or make another
          version of the App. All proprietary content, trademarks, service
          marks, brand names, logos and other intellectual property displayed in
          the App are the property of Kopi Kuy. You must not republish, sell,
          rent or sub-license, reproduce, duplicate or copy any material from
          the App, or redistribute content from Kopi Kuy (unless content is
          specifically made for redistribution).
          {"\n"}
          {"\n"}
          Kopi Kuy reserves the rights to update the App at any time. Currently,
          the App can be downloaded on Android {"&"} iOS, subject to any changes
          to the requirements for both systems. Kopi Kuy recommend you to always
          update the App from time to time. There is a possibility that the App
          does not compatible with the Android{"&"} iOS version that you have
          installed on your device. For such purpose, you have to always accept
          updates to the App when it is available. Kopi Kuy may also wish to
          stop providing the Service through the App, and may terminate use of
          it at any time without giving notice of termination to you. Therefore,
          upon such termination, all rights and licenses granted to you in these
          terms will end and you must stop using the App, and delete it from
          your device.
          {"\n"}
          {"\n"}
          For proving our good Service to you, the App will require registration
          for an account (the "Account") by selecting a unique user
          identification and password and providing your personal information.
          You may use your Account to place your order and buy our products also
          collecting your points. You are required to keep your user
          identification and password of your Account confidential and log out
          from your Account at the end of each session. Please notify Kopi Kuy
          immediately if there is unauthorised use of your Account, and ensure
          that your Account information is accurate and up-to-date. You are
          fully responsible for all activities that occur under your Account
          even if such activities or uses were not committed by you. Kopi Kuy
          will not be liable for any loss or damage arising from unauthorised
          use of your password or your failure to comply with this paragraph.
          Kopi Kuy reserves the right to refuse to provide you access to the
          Site or Services or to allow you to open an Account for any reason.
          {"\n"}
          {"\n"}
          Your privacy is very important to Kopi Kuy. By using the App or
          providing information on the App, you agree that Kopi Kuy may collect,
          use, disclose and/or process of your personal information or personal
          data and User ad acknowledge that the proprietary rights of your
          information are jointly owned by you and Kopi Kuy, and shall not,
          whether directly or indirectly, disclose your information related to
          your Account to any third party, or otherwise allow any third party to
          access or use your information related to your Account, without Kopi
          Kuy prior written consent.
          {"\n"}
          {"\n"}
          You may deactivate your Account at any time. Notwithstanding any such
          deactivation, you remain responsible and liable for any incomplete
          transaction (whether commenced prior to or after such termination),
          payment for the product, or the like, and you must contact Kopi Kuy
          after you promptly and effectively carried out and completed all
          incomplete transactions. Kopi Kuy shall have no liability, and shall
          not be liable for any damages incurred due to the actions taken in
          accordance with this paragraph. You waive any and all claims based on
          any such action taken by Kopi Kuy.
          {"\n"}
          {"\n"}
          Please note that the using of the App will require an active internet
          connection, and therefore you have to ensure that your phone must have
          internet connection while using the App either provided by your mobile
          network provider, or Wi-Fi. The App will not work at full
          functionality if you don't have access to Wi-Fi, and/or you don't have
          any of your data allowance left, and Kopi Kuy cannot take
          responsibility for it. There is also possibility that your mobile
          provider charge for the cost of data for the duration of the
          connection while using the App, and by using the App, you're accepting
          responsibility for any such charges, including roaming data charges if
          you use the App outside of your home territory (i.e. region or
          country) without turning off data roaming.
          {"\n"}
          {"\n"}
          Kopi Kuy may modify and update our Terms of Service at any time by
          posting the revised Terms of Service on the App. Therefore, Kopi Kuy
          suggest you to review this page from time to time to see any changes.
          These changes are effective immediately after they are posted on this
          page and your continued use of the App after such changes have been
          posted shall constitute your acceptance of such revised Terms of
          Service.
          {"\n"}
          {"\n"}
          Refund Policy
          {"\n"}
          {"\n"}
          If your order made through the App is cancelled, Kopi Kuy will refund
          your payment in the form of Kenangan Points which can be used for your
          next purchase of our products through the App
          {"\n"}
          {"\n"}
          Kopi Kuy does not monitor the cancellation and refund process for
          offline payment.
          {"\n"}
          {"\n"}
          Disclaimer
          {"\n"}
          {"\n"}
          The Services are provided "as is", and to the maximum extent permitted
          by applicable law, we exclude all representations, warranties and
          conditions relating to the App or the Service and the use of it
          (including, without limitation, any warranties implied by law in
          respect of satisfactory quality, fitness for purpose and/or the use of
          reasonable care and skill). Nothing in this disclaimer will:
          {"\n"}
          {"\n"}• limit or exclude our or your liability for death or personal
          injury resulting from negligence;
          {"\n"}
          {"\n"}• limit or exclude our or your liability for fraud or fraudulent
          misrepresentation;
          {"\n"}
          {"\n"}• limit any of our or your liabilities in any way that is not
          permitted under applicable law; or
          {"\n"}
          {"\n"}• exclude any of our or your liabilities that may not be
          excluded under applicable law.
          {"\n"}
          {"\n"}
          The limitations and exclusions of liability set out in this paragraph
          and elsewhere in this disclaimer are subject to the preceding
          paragraph; and govern all liabilities arising under the disclaimer or
          in relation to the subject matter of this disclaimer, including
          liabilities arising in contract, in tort (including negligence) and
          for breach of statutory duty.
          {"\n"}
          {"\n"}
        </Text>
      </ScrollView>
    </Box>
  );
};

export default PolicyScreen;
