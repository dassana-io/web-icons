import { ReactComponent as AWS } from './assets/logos/aws.svg'
import { ReactComponent as AZURE } from './assets/logos/azure.svg'
import { ReactComponent as CARBON_BLACK } from './assets/logos/carbon_black.svg'
import { ReactComponent as CROWDSTRIKE } from './assets/logos/crowdstrike.svg'
import { ReactComponent as DEPENDABOT } from './assets/logos/dependabot.svg'
import { ReactComponent as GCP } from './assets/logos/gcp.svg'
import { ReactComponent as GITHUB } from './assets/logos/github.svg'
import { ReactComponent as KUBERNETES } from './assets/logos/kubernetes.svg'
import { ReactComponent as LACEWORK } from './assets/logos/lacework.svg'
import { ReactComponent as LUCIDUM } from './assets/logos/lucidum.svg'
import { ReactComponent as MICROSOFT_DEFENDER } from './assets/logos/microsoft_defender.svg'
import { ReactComponent as ORACLE } from './assets/logos/oracle.svg'
import { ReactComponent as ORCA } from './assets/logos/orca.svg'
import { ReactComponent as PRISMA } from './assets/logos/prisma.svg'
import { ReactComponent as QUALYS } from './assets/logos/qualys.svg'
import { ReactComponent as SENTINEL_ONE } from './assets/logos/sentinel_one.svg'
import { ReactComponent as SERVICE_NOW } from './assets/logos/service_now.svg'
import { ReactComponent as SNYK } from './assets/logos/snyk.svg'
import { ReactComponent as STACKROX } from './assets/logos/stackrox.svg'
import { ReactComponent as TENABLE } from './assets/logos/tenable.svg'
import { ReactComponent as VERACODE } from './assets/logos/veracode.svg'
import { ReactComponent as WIZ } from './assets/logos/wiz.svg'

export const LogoMap = {
	aws: AWS,
	azure: AZURE,
	carbon_black: CARBON_BLACK,
	crowdstrike: CROWDSTRIKE,
	dependabot: DEPENDABOT,
	gcp: GCP,
	github: GITHUB,
	kubernetes: KUBERNETES,
	lacework: LACEWORK,
	lucidum: LUCIDUM,
	microsoft_defender: MICROSOFT_DEFENDER,
	oracle: ORACLE,
	orca: ORCA,
	prisma: PRISMA,
	qualys: QUALYS,
	sentinel_one: SENTINEL_ONE,
	service_now: SERVICE_NOW,
	snyk: SNYK,
	stackrox: STACKROX,
	tenable: TENABLE,
	veracode: VERACODE,
	wiz: WIZ
}

export type IconName = keyof typeof LogoMap
