import { SomeEnum } from './some-enum.enum';

export class SomeClass {

    public BooleanProperty = false;

    public NumberProperty = 0;

    public StringProperty: string = '';

    public AnyProperty: any;

    public NullProperty: null = null;

    public UndefinedProperty: undefined;

    public DateProperty: Date = new Date();

    public EnumProperty: SomeEnum = SomeEnum.FirstOption;
}
