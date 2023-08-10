import React from 'react';
import { useGeneralCtx } from '../context/GeneralProvider';

function Terms() {
  const { mdScreen, smScreen } = useGeneralCtx();

  const definitions = [
    '"Shop" means Shop Pty Ltd ABN 11 222 333 444;',
    '"Customer" means the person or corporation placing an order for the purchase of goods or services from Shop;',
    '"Products" means any goods, materials, equipment or services provided to the Customer by Shop;',
    "if the Customer comprises more than one person, each of thos person's liability is joint and several;",
    'references to a party or a person includes any form of entity and their respective successors, assigns and representatives;',
    'for all periods and times specified in clauses 5 and 11, time is of the essence; and',
    'all references to currency are references to Australian dollars.',
  ];
  const topics = [
    'Definitions & Interpretation',
    'General',
    'Quotations',
    'Prices / Taxes',
    'Terms of Payment',
    'Credit Accounts',
    'Change of Ownership',
    'Information on the Products supplied',
    'Delivery',
  ];

  const generateTopicId = (topic) => {
    const sanitizedTopic = topic.replace(/[^\w\s]/gi, '').toLowerCase();
    return sanitizedTopic.replace(/\s+/g, '-');
  };

  const scrollToTopic = (topicId) => {
    const element = document.getElementById(topicId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderListItems = () => {
    return topics.map((tObj, index) => {
      const topicId = generateTopicId(tObj);
      return (
        <li
          className={`${
            mdScreen ? 'text-xs' : 'min-w-[306px]'
          } duration-200 hover:cursor-pointer hover:font-bold md:text-xs`}
          key={index}
          onClick={() => scrollToTopic(topicId)}
        >
          {tObj}
        </li>
      );
    });
  };

  return (
    <div className="container mx-auto px-5 ">
      <h1 className="my-6 text-3xl font-bold">Shop Terms & Conditions</h1>
      <div className="flex gap-5">
        <div>
          <h2 className="text-2xl md:text-base ">
            GENERAL TERMS AND CONDITIONS FOR SALE OF PRODUCTS AND SERVICES
          </h2>
          <h3 id="definitions-interpretation" className="mt-12 font-bold  ">
            Definitions & Interpretation
          </h3>
          <h4 className="my-6 font-normal md:text-sm">
            In the following Terms and Conditions of sale, unless the context
            requires otherwise
          </h4>
          <ol>
            {definitions.map((dObj, index) => (
              <li key={index} className="text-sm font-normal md:text-xs">
                ({String.fromCharCode(97 + index)}) {dObj}
              </li>
            ))}
          </ol>
          <h3 id="general" className="my-6 font-bold">
            General
          </h3>
          <p className="font-normal md:text-sm">
            By ordering the Products and/or accepting delivery of the Products
            from Shop, the Customer agrees that it is bound by these Terms and
            Conditions of sale. Customer orders, including orders placed via the
            internet, are subject to acceptance by Shop. The acceptance of the
            Customer's order by Shop is expressly made conditional upon the
            Customer's assent to these Terms and Conditions which will prevail
            notwithstanding anything that may be stated to the contrary on the
            Customer's order. Shop reserves the right to vary any of these terms
            at any time and any subsequent orders placed by the Customer will
            constitute an acceptance of the terms as varied. Once a Customer
            order has been placed and accepted by Shop, the Customer agrees that
            the Customer has no right to cancel or vary the order at any time,
            unless agreed upon in writing by both parties.
          </p>
          <h3 id="quotations" className="my-6 font-bold">
            Quotations
          </h3>
          <p className="font-normal md:text-sm">
            Any quotation by Shop to the Customer will be open for acceptance by
            the Customer within the period stated in the quotation or, where no
            period is stated, within seven (7) days from the date of the
            quotation. Thereafter, prices stated in the quotation may be varied
            by Shop without notice to the Customer.
          </p>
          <h3 id="prices-taxes" className="my-6 font-bold">
            Prices / Taxes
          </h3>
          <p className="font-normal md:text-sm">
            The prices charged by and payable to Shop will be the ruling prices
            applicable at the time of order placement, provided that the
            Products are accepted for delivery within a reasonable time. Prices
            are subject to change without notice. Recommended retail prices are
            provided for indicative purposes only and there is no obligation for
            Shop to comply with that recommendation. It as agreed that should
            the Customer fail for any reason to acquire the quantity of Products
            sold then without limiting Shop' other rights and remedies the unit
            price charged for the goods sold may be amended to take into account
            any variation in the total quantity purchased by the Customer.
            Prices include GST, but do not include any other tax or duty, which
            is in addition to the price and is to be paid by the Customer at the
            time of payment for the Products.
          </p>
          <h3 id="terms-payment" className="my-6 font-bold">
            Terms of Payment
          </h3>
          <p className="font-normal md:text-sm">
            Credit Card Payments may attract a surcharge, and Shop will inform
            the Customer if this is to be the case before processing the
            transaction.
          </p>
          <p className="my-6 font-normal md:text-sm">
            Unless otherwise agreed in writing by Shop, where Shop has not
            agreed in writing to provide commercial credit to the Customer, the
            total purchase price for Products supplied will be due for payment
            in cash prior to delivery.
          </p>
          <p className="my-6 font-normal md:text-sm">
            Where Shop has agreed in writing to provide commercial credit to the
            Customer, the Customer must make payments in accordance with the
            payment terms provided by Shop.
          </p>
          <p className="my-6 font-normal md:text-sm">
            Where Shop has approved the provision of a commercial credit
            arrangement with the Customer but has not provided notice of the
            payment terms to the Customer, the Customer must pay the total
            purchase price for Products supplied within seven days of the
            statement date.
          </p>
          <p className="font-normal md:text-sm">
            Credit Card Payment at an Invoice or transaction level may also be
            offered to the Customer as a stand-alone payment method, or in
            conjunction with Credit Card Direct Debit Authorisation.
          </p>
          <h3 id="credit-accounts" className="my-6 font-bold">
            Credit Accounts
          </h3>
          <p className="font-normal md:text-sm">
            Any commercial credit arrangements that are provided to the Customer
            by Shop will continue until terminated by Shop at it sole
            discretion. In the event that Shop terminates the Customer's
            commercial credit arrangement, the Customer will be notified in
            writing and termination will take effect upon receipt of that
            notification by the Customer.
          </p>
          <h3 id="change-ownership" className="my-6 font-bold">
            Change of Ownership
          </h3>
          <p className="font-normal md:text-sm">
            Trading accounts are approved by Shop based on the information
            supplied and the representations made by the Customer. In the event
            that there is a change in ownership of the Customer, whether total
            or partial, the Customer must immediately provide written notice to
            Shop informing Shop of these changes. Until Shop receives written
            notice from the Customer of a change in ownership, the Customer
            (including where it is a company or trustee, each of the Directors
            thereof) holds Shop indemnified against any and all losses, unpaid
            accounts, interest, damages, costs, charges, fees and expenses
            incurred or suffered by Shop in trading with any person, company
            (including the same company but with a different shareholder or
            shareholders) or other entity (including a trust) which may have
            purchased the Customer's business or any interest in the Customer's
            business or any of the shares in the Customer and used the
            Customer's previously approved account for trading.
          </p>{' '}
          <p className="mt-6 font-normal md:text-sm">
            Where a Customer has been authorised by Shop to make payments
            through Credit Card Direct Debit, the Customer must provide notice
            in writing at least five (5) days prior to any change in ownership
            of the business to allow Shop sufficient time to contact the new
            owner to obtain and confirm new Credit Card information if
            applicable.
          </p>
          <h3 id="information-products" className="my-6 font-bold">
            Information on the Products supplied
          </h3>
          <p className="font-normal md:text-sm">
            All descriptive specifications, illustrations, drawings, data,
            dimensions and weights furnished by Shop or otherwise contained in
            catalogues or other advertising material are approximate only and
            are intended to be merely a general description of the goods, are
            not incorporated within this agreement and no not form part of the
            description of the goods sold under this or any other agreement
            unless otherwise agreed to in writing by Shop in which case such
            information will be subject to recognised trade tolerances.
          </p>
          <h3 id="delivery" className="my-6 font-bold">
            Delivery
          </h3>
          <p className="font-normal md:text-sm">
            The means of delivering the Products to the Customer will be at
            Shop' discretion. Shop reserves the right to deliver Products in
            part deliveries. In the event that Shop incurs additional costs for
            meeting special (i.e. Tasmania / Northern Territory Deliveries) or
            urgent delivery arrangements, these additional costs may be charged
            to the Customer and may include the cost of airfreight where it is
            not the normal method of delivery. The Customer agrees to accept
            delivery of the Products sold at any time during normal business
            hours.
          </p>
          <p className="mt-6 font-normal md:text-sm">
            Shop will not be liable for any loss or damage resulting from any
            late delivery of the Products and late delivery will not entitle the
            Customer to rescind or repudiate the Customer's order for the
            Products.
          </p>
        </div>
        {!smScreen && (
          <ul className="h-fit min-w-fit bg-color1 p-7 font-normal  md:text-sm">
            {renderListItems()}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Terms;
