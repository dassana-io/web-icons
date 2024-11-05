import AWS from './assets/logos/aws.svg'
import AZURE from './assets/logos/azure.svg'
import CARBON_BLACK from './assets/logos/carbon_black.svg'
import CROWDSTRIKE from './assets/logos/crowdstrike.svg'
import CUSTOM from './assets/logos/custom.svg'
import CYERA from './assets/logos/cyera.svg'
import DEPENDABOT from './assets/logos/dependabot.svg'
import GCP from './assets/logos/gcp.svg'
import GITHUB from './assets/logos/github.svg'
import KUBERNETES from './assets/logos/kubernetes.svg'
import LACEWORK from './assets/logos/lacework.svg'
import LUCIDUM from './assets/logos/lucidum.svg'
import MICROSOFT_DEFENDER from './assets/logos/microsoft_defender.svg'
import ORACLE from './assets/logos/oracle.svg'
import ORCA from './assets/logos/orca.svg'
import PRISMA from './assets/logos/prisma.svg'
import QUALYS from './assets/logos/qualys.svg'
import SENTINEL_ONE from './assets/logos/sentinel_one.svg'
import SERVICE_NOW from './assets/logos/service_now.svg'
import SNYK from './assets/logos/snyk.svg'
import STACKROX from './assets/logos/stackrox.svg'
import TENABLE from './assets/logos/tenable.svg'
import VERACODE from './assets/logos/veracode.svg'
import WIZ from './assets/logos/wiz.svg'

export const LogoMap = {
	aws: AWS,
	azure: AZURE,
	carbon_black: CARBON_BLACK,
	crowdstrike: CROWDSTRIKE,
	custom: CUSTOM,
	cyera: CYERA,
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

export type LogoName = keyof typeof LogoMap
