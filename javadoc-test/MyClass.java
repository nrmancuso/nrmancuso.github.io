public class MyClass {
    public record MyRecord(){
        public MyRecord {
            /**
             * This javadoc has no period
             */
            String string = "string";
        }
    }
    public class MyInnerClass {
        public MyInnerClass() {
            /**
             * This javadoc has no period
             */
            String string = "string";
        }

    }
    public enum MyEnum {
        /**
         * This javadoc has no period
         */
        ONE,
        TWO,
        THREE
    }
    public interface MyInterface {
        /**
         * This javadoc has no period
         */
        String string = "string";
    }
}

record MyOtherRecord() {
    public MyOtherRecord {
        /**
         * This javadoc has no period
         */
        String string = "string";
    }
}

class MyOtherClass {
    public MyOtherClass() {
        /**
         * This javadoc has no period
         */
        String string = "string";
    }

}

enum MyOtherEnum {
    /**
     * This javadoc has no period
     */
    ONE,
    TWO,
    THREE
}

interface MyOtherInterface {
    /**
     * This javadoc has no period
     */
    String string = "string";
}
