import { Route, Switch } from "react-router-dom"
import Blog from "./pages/blog/Blog"
import Events from "./pages/events/Events"
import AnalystReport from "./pages/analyst-report/AnalystReport"
import CustomerStories from "./pages/customer-stories/CustomerStories"
import MainPage from "./pages/main/MainPage"
import PriceList from "./pages/price-list/PriceList"
import Pricing from "./pages/pricing/Pricing"
import Solutions from "./pages/solutions/Solutions"
import Retail from "./pages/retail/Retail"
import WhyMirats from "./pages/why-mirats/WhyMirats"
import TrustSecurity from "./pages/trust-security/TrustSecurity"
import Infrastructure from "./pages/infrastructure/Infrastructure"
import DataCloud from "./pages/data-cloud/DataCloud"
import OpenCloud from "./pages/open-cloud/OpenCloud"
import Sustainability from "./pages/sustainability/Sustainability"
import MultiCloud from "./pages/multi-cloud/MultiCloud"
import MarketResearch from "./pages/market-research/MarketResearch"
import Accounts from "./pages/accounts/Accounts"
import Contacts from "./pages/contacts/Contacts"
import ClientOnboarding from "./pages/client-onboarding/ClientOnboarding"
import BusinessInfo from "./pages/business-info/BusinessInfo"
import SalesAccountsInfo from "./pages/sales-accounts/SalesAccountsInfo"
import DocumentsLinks from "./pages/documents-links/DocumentsLinks"
import VendorOnboarding from "./pages/vendor-onboarding/VendorOnboarding"
import VendorBusinessInfo from "./pages/vendor-business-info/VendorBusinessInfo"
// import VendorDocuments from "./pages/vendor-documents.js/VendorDocuments"
import VendorDocumentsLinks from "./pages/vendor-documents-links/VendorDocumentLinks"
import VendorSalesAccountsInfo from "./pages/vendor-sales-accounts/VendorSalesAccounts"
import VendorQualityChecks from "./pages/vendor-quality-checks/VendorQualityChecks"
import VendorBusinessModel from "./pages/vendor-business-model/VendorBusinessModel"
import ScrollToTop from "./components/ScrollToTop"

function App() {
	return (
		<div>
			<ScrollToTop/>
			<Switch>
				<Route path='/' exact>
					<MainPage />
				</Route>

				<Route path='/why-mirats'>
					<WhyMirats />
				</Route>

				<Route path="/multicloud">
					<MultiCloud/>
				</Route>

				<Route path='/security'>
					<TrustSecurity/>
				</Route>

				<Route path='/infrastructure'>
					<Infrastructure/>
				</Route>

				<Route path="/data-cloud">
					<DataCloud/>
				</Route>

				<Route path="/open-cloud">
					<OpenCloud/>
				</Route>

				<Route path="/sustainability">
					<Sustainability/>
				</Route>

				<Route path='/events' exact>
					<Events />
				</Route>

				<Route path='/blog' exact>
					<Blog />
				</Route>

				<Route path='/customers' exact>
					<CustomerStories />
				</Route>

				<Route path='/analyst-report' exact>
					<AnalystReport />
				</Route>

				<Route path='/solutions' exact>
					<Solutions />
				</Route>

				<Route path='/retail' exact>
					<Retail />
				</Route>

				<Route path='/market-research' exact>
					<MarketResearch/>
				</Route>

				<Route path="/account">
					<Accounts/>
				</Route>

				<Route path="/contacts">
					<Contacts/>
				</Route>

				<Route path="/client-onboarding">
					<ClientOnboarding/>
				</Route>

				<Route path="/business-info">
					<BusinessInfo/>
				</Route>

				<Route path="/sales-accounts">
					<SalesAccountsInfo/>
				</Route>

				<Route path="/documents-links">
					<DocumentsLinks/>
				</Route>

				<Route path="/vendor-onboarding">
					<VendorOnboarding/>
				</Route>

				<Route path="/vendor-business-info">
					<VendorBusinessInfo/>
				</Route>

				<Route path="/vendor-documents-links">
					<VendorDocumentsLinks/>
				</Route>
 
				<Route path="/vendor-sales-accounts">
					<VendorSalesAccountsInfo/>
				</Route>

				<Route path="/vendor-quality-checks/:questionType" exact>
					<VendorQualityChecks/>
				</Route>

				<Route path="/vendor-business-model/:businessModelQuestions" exact>
					<VendorBusinessModel/>
				</Route>

				<Route path='/pricing' exact>
					<Pricing />
				</Route>
				
				<Route path='/pricing-list' exact>
					<PriceList />
				</Route>
			</Switch>
		</div>
	)
}

export default App
