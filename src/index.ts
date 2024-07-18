import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { AchievementsService } from './services/achievements';
import { AutomationService } from './services/automation';
import { BisnodeService } from './services/bisnode';
import { BonuschecksService } from './services/bonuschecks';
import { ChallengesService } from './services/challenges';
import { ConsentsService } from './services/consents';
import { ContactoverviewService } from './services/contactoverview';
import { ContactsService } from './services/contacts';
import { InteractionsService } from './services/interactions';
import { InteractionschemasService } from './services/interactionschemas';
import { InventoryService } from './services/inventory';
import { MemberstatusService } from './services/memberstatus';
import { OrdersService } from './services/orders';
import { PersonlookupService } from './services/personlookup';
import { PointAccountsService } from './services/point-accounts';
import { PosoffersService } from './services/posoffers';
import { PromotionsService } from './services/promotions';
import { SmsService } from './services/sms';
import { StoresService } from './services/stores';
import { TargetAudiencesService } from './services/target-audiences';
import { TrackingService } from './services/tracking';
import { TransactionsService } from './services/transactions';

export class VoyadoEngage {
  public readonly achievements: AchievementsService;

  public readonly automation: AutomationService;

  public readonly bisnode: BisnodeService;

  public readonly bonuschecks: BonuschecksService;

  public readonly challenges: ChallengesService;

  public readonly consents: ConsentsService;

  public readonly contactoverview: ContactoverviewService;

  public readonly contacts: ContactsService;

  public readonly interactions: InteractionsService;

  public readonly interactionschemas: InteractionschemasService;

  public readonly inventory: InventoryService;

  public readonly memberstatus: MemberstatusService;

  public readonly orders: OrdersService;

  public readonly personlookup: PersonlookupService;

  public readonly pointAccounts: PointAccountsService;

  public readonly posoffers: PosoffersService;

  public readonly promotions: PromotionsService;

  public readonly sms: SmsService;

  public readonly stores: StoresService;

  public readonly targetAudiences: TargetAudiencesService;

  public readonly tracking: TrackingService;

  public readonly transactions: TransactionsService;

  constructor(public config: SdkConfig) {
    const baseUrl = config.environment || config.baseUrl || Environment.DEFAULT;
    this.config = {
      ...config,
      baseUrl,
    };
    this.achievements = new AchievementsService(this.config);

    this.automation = new AutomationService(this.config);

    this.bisnode = new BisnodeService(this.config);

    this.bonuschecks = new BonuschecksService(this.config);

    this.challenges = new ChallengesService(this.config);

    this.consents = new ConsentsService(this.config);

    this.contactoverview = new ContactoverviewService(this.config);

    this.contacts = new ContactsService(this.config);

    this.interactions = new InteractionsService(this.config);

    this.interactionschemas = new InteractionschemasService(this.config);

    this.inventory = new InventoryService(this.config);

    this.memberstatus = new MemberstatusService(this.config);

    this.orders = new OrdersService(this.config);

    this.personlookup = new PersonlookupService(this.config);

    this.pointAccounts = new PointAccountsService(this.config);

    this.posoffers = new PosoffersService(this.config);

    this.promotions = new PromotionsService(this.config);

    this.sms = new SmsService(this.config);

    this.stores = new StoresService(this.config);

    this.targetAudiences = new TargetAudiencesService(this.config);

    this.tracking = new TrackingService(this.config);

    this.transactions = new TransactionsService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.achievements.baseUrl = baseUrl;
    this.automation.baseUrl = baseUrl;
    this.bisnode.baseUrl = baseUrl;
    this.bonuschecks.baseUrl = baseUrl;
    this.challenges.baseUrl = baseUrl;
    this.consents.baseUrl = baseUrl;
    this.contactoverview.baseUrl = baseUrl;
    this.contacts.baseUrl = baseUrl;
    this.interactions.baseUrl = baseUrl;
    this.interactionschemas.baseUrl = baseUrl;
    this.inventory.baseUrl = baseUrl;
    this.memberstatus.baseUrl = baseUrl;
    this.orders.baseUrl = baseUrl;
    this.personlookup.baseUrl = baseUrl;
    this.pointAccounts.baseUrl = baseUrl;
    this.posoffers.baseUrl = baseUrl;
    this.promotions.baseUrl = baseUrl;
    this.sms.baseUrl = baseUrl;
    this.stores.baseUrl = baseUrl;
    this.targetAudiences.baseUrl = baseUrl;
    this.tracking.baseUrl = baseUrl;
    this.transactions.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.achievements.baseUrl = environment;
    this.automation.baseUrl = environment;
    this.bisnode.baseUrl = environment;
    this.bonuschecks.baseUrl = environment;
    this.challenges.baseUrl = environment;
    this.consents.baseUrl = environment;
    this.contactoverview.baseUrl = environment;
    this.contacts.baseUrl = environment;
    this.interactions.baseUrl = environment;
    this.interactionschemas.baseUrl = environment;
    this.inventory.baseUrl = environment;
    this.memberstatus.baseUrl = environment;
    this.orders.baseUrl = environment;
    this.personlookup.baseUrl = environment;
    this.pointAccounts.baseUrl = environment;
    this.posoffers.baseUrl = environment;
    this.promotions.baseUrl = environment;
    this.sms.baseUrl = environment;
    this.stores.baseUrl = environment;
    this.targetAudiences.baseUrl = environment;
    this.tracking.baseUrl = environment;
    this.transactions.baseUrl = environment;
  }

  set timeout(timeout: number) {
    this.achievements.timeout = timeout;
    this.automation.timeout = timeout;
    this.bisnode.timeout = timeout;
    this.bonuschecks.timeout = timeout;
    this.challenges.timeout = timeout;
    this.consents.timeout = timeout;
    this.contactoverview.timeout = timeout;
    this.contacts.timeout = timeout;
    this.interactions.timeout = timeout;
    this.interactionschemas.timeout = timeout;
    this.inventory.timeout = timeout;
    this.memberstatus.timeout = timeout;
    this.orders.timeout = timeout;
    this.personlookup.timeout = timeout;
    this.pointAccounts.timeout = timeout;
    this.posoffers.timeout = timeout;
    this.promotions.timeout = timeout;
    this.sms.timeout = timeout;
    this.stores.timeout = timeout;
    this.targetAudiences.timeout = timeout;
    this.tracking.timeout = timeout;
    this.transactions.timeout = timeout;
  }

  set token(token: string) {
    this.achievements.token = token;
    this.automation.token = token;
    this.bisnode.token = token;
    this.bonuschecks.token = token;
    this.challenges.token = token;
    this.consents.token = token;
    this.contactoverview.token = token;
    this.contacts.token = token;
    this.interactions.token = token;
    this.interactionschemas.token = token;
    this.inventory.token = token;
    this.memberstatus.token = token;
    this.orders.token = token;
    this.personlookup.token = token;
    this.pointAccounts.token = token;
    this.posoffers.token = token;
    this.promotions.token = token;
    this.sms.token = token;
    this.stores.token = token;
    this.targetAudiences.token = token;
    this.tracking.token = token;
    this.transactions.token = token;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
